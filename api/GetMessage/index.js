module.exports = async function (context, req) {
  const date = "2022-05-13T04:46:16.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

