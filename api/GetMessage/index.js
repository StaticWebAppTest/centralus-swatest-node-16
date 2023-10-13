module.exports = async function (context, req) {
  const date = "2023-10-13T04:10:52.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

