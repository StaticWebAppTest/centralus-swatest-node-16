module.exports = async function (context, req) {
  const date = "2023-05-13T17:07:50.560Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

