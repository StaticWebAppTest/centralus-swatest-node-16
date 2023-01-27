module.exports = async function (context, req) {
  const date = "2023-01-27T05:09:01.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

