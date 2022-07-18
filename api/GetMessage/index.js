module.exports = async function (context, req) {
  const date = "2022-07-18T11:09:31.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

