module.exports = async function (context, req) {
  const date = "2023-03-12T18:11:06.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

