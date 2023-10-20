module.exports = async function (context, req) {
  const date = "2023-10-20T11:07:25.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

