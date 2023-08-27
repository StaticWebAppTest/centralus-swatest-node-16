module.exports = async function (context, req) {
  const date = "2023-08-27T14:06:45.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

