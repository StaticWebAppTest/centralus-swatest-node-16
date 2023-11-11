module.exports = async function (context, req) {
  const date = "2023-11-11T09:07:51.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

