module.exports = async function (context, req) {
  const date = "2022-07-28T15:11:06.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

