module.exports = async function (context, req) {
  const date = "2023-06-25T04:12:11.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

