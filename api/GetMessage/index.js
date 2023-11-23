module.exports = async function (context, req) {
  const date = "2023-11-23T21:07:55.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

