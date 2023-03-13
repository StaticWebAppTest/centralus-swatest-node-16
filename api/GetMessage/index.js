module.exports = async function (context, req) {
  const date = "2023-03-13T07:09:09.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

