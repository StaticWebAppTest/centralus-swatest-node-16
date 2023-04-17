module.exports = async function (context, req) {
  const date = "2023-04-17T07:09:01.174Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

