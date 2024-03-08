module.exports = async function (context, req) {
  const date = "2024-03-08T04:11:09.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

