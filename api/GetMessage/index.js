module.exports = async function (context, req) {
  const date = "2022-05-17T11:09:35.086Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

