module.exports = async function (context, req) {
  const date = "2023-09-29T06:11:57.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

