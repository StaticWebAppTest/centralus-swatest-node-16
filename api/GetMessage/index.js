module.exports = async function (context, req) {
  const date = "2022-04-10T14:09:12.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

