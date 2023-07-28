module.exports = async function (context, req) {
  const date = "2023-07-28T12:17:07.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

