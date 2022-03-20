module.exports = async function (context, req) {
  const date = "2022-03-20T09:10:28.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

