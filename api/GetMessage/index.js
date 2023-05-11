module.exports = async function (context, req) {
  const date = "2023-05-11T07:08:37.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

