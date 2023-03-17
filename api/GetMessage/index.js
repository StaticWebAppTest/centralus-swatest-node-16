module.exports = async function (context, req) {
  const date = "2023-03-17T12:18:18.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

