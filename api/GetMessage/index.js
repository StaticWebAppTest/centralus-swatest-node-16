module.exports = async function (context, req) {
  const date = "2023-07-23T06:11:19.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

