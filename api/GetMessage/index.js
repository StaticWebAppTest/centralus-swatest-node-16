module.exports = async function (context, req) {
  const date = "2023-09-16T14:06:45.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

