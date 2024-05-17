module.exports = async function (context, req) {
  const date = "2024-05-17T15:10:09.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

