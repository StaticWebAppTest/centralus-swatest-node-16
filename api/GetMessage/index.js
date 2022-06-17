module.exports = async function (context, req) {
  const date = "2022-06-17T08:14:03.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

