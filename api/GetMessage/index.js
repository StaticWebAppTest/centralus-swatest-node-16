module.exports = async function (context, req) {
  const date = "2022-10-29T18:13:47.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

