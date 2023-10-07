module.exports = async function (context, req) {
  const date = "2023-10-07T08:10:32.863Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

