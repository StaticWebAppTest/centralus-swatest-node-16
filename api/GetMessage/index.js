module.exports = async function (context, req) {
  const date = "2023-07-31T14:08:40.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

