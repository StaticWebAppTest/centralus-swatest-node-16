module.exports = async function (context, req) {
  const date = "2022-05-30T11:10:08.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

