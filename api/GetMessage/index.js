module.exports = async function (context, req) {
  const date = "2023-12-11T02:24:01.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

