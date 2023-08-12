module.exports = async function (context, req) {
  const date = "2023-08-12T08:09:54.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

