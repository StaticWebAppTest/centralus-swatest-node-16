module.exports = async function (context, req) {
  const date = "2022-03-04T05:09:43.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

