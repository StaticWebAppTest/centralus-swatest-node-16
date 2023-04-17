module.exports = async function (context, req) {
  const date = "2023-04-17T09:09:45.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

