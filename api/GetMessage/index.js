module.exports = async function (context, req) {
  const date = "2023-01-14T20:09:08.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

