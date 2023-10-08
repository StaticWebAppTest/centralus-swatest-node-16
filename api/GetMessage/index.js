module.exports = async function (context, req) {
  const date = "2023-10-08T06:11:01.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

