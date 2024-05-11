module.exports = async function (context, req) {
  const date = "2024-05-11T07:10:09.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

