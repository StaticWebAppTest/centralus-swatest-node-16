module.exports = async function (context, req) {
  const date = "2023-11-25T08:10:37.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

