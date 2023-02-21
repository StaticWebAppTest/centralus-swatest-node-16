module.exports = async function (context, req) {
  const date = "2023-02-21T04:12:09.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

