module.exports = async function (context, req) {
  const date = "2024-06-26T17:09:08.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

