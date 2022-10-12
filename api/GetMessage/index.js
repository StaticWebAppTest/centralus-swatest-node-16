module.exports = async function (context, req) {
  const date = "2022-10-12T11:13:11.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

