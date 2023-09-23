module.exports = async function (context, req) {
  const date = "2023-09-23T09:07:23.863Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

