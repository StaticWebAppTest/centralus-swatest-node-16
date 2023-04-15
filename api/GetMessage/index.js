module.exports = async function (context, req) {
  const date = "2023-04-15T18:10:19.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

