module.exports = async function (context, req) {
  const date = "2023-09-19T15:09:14.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

