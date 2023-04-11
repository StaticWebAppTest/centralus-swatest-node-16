module.exports = async function (context, req) {
  const date = "2023-04-11T17:07:53.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

