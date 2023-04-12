module.exports = async function (context, req) {
  const date = "2023-04-12T09:09:11.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

