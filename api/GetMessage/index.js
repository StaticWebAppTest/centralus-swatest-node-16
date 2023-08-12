module.exports = async function (context, req) {
  const date = "2023-08-12T06:09:55.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

