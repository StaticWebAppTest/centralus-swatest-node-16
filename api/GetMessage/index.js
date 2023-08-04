module.exports = async function (context, req) {
  const date = "2023-08-04T04:10:07.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

