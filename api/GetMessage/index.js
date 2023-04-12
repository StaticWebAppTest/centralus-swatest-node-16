module.exports = async function (context, req) {
  const date = "2023-04-12T06:12:02.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

