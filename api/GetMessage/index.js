module.exports = async function (context, req) {
  const date = "2023-01-11T07:09:13.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

