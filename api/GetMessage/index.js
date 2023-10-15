module.exports = async function (context, req) {
  const date = "2023-10-15T04:10:33.863Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

