module.exports = async function (context, req) {
  const date = "2022-04-28T21:09:16.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

