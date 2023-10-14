module.exports = async function (context, req) {
  const date = "2023-10-14T04:10:23.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

