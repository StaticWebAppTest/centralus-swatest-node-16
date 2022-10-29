module.exports = async function (context, req) {
  const date = "2022-10-29T11:09:47.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

